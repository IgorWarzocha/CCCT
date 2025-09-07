#!/usr/bin/env node

/*
 * Markdown TOC Generator with Line Numbers
 * 
 * Automatically generates Table of Contents files for markdown documents
 * with precise line number references for targeted reading.
 * 
 * Usage:
 *   node extract-toc.cjs                    # Process current directory
 *   node extract-toc.cjs /path/to/docs     # Process specific directory
 * 
 * Output:
 *   - Creates filename-toc.md for each .md file in directory
 *   - Includes precise line ranges for each section
 *   - Hierarchical structure with proper indentation
 *   - Skips existing TOC files to avoid recursion
 * 
 * Example output format:
 *   - **Section Name** (read lines 42-67)
 *     - **Subsection** (read lines 44-52)
 * 
 * Perfect for LLM systems that need surgical access to specific
 * parts of long documentation without reading entire files.
 */

const fs = require('fs');
const path = require('path');

// Get directory from command line or use current directory
const targetDir = process.argv[2] || './';
const outputPath = path.join(targetDir, 'DIRECTORY-TOC.md');

function extractTOCWithLines(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Find all headers with their positions
    const headers = [];
    lines.forEach((line, index) => {
        const match = line.match(/^(#{1,6})\s+(.+)$/);
        if (match) {
            headers.push({
                level: match[1].length,
                title: match[2],
                lineNumber: index + 1, // 1-based line numbers
                headerText: match[1] + ' ' + match[2]
            });
        }
    });
    
    // Calculate end lines for each header
    const headersWithRanges = headers.map((header, index) => {
        let endLine;
        
        // Find the next header at the same or higher level
        const nextHeaderIndex = headers.findIndex((nextHeader, nextIndex) => {
            return nextIndex > index && nextHeader.level <= header.level;
        });
        
        if (nextHeaderIndex !== -1) {
            // End line is the line before the next header
            endLine = headers[nextHeaderIndex].lineNumber - 1;
        } else {
            // This is the last header at this level, so end at file end
            endLine = lines.length;
        }
        
        return {
            ...header,
            endLine,
            range: `${header.lineNumber}-${endLine}`,
            filePath
        };
    });
    
    return headersWithRanges;
}

function getAllMarkdownFiles(dir) {
    const files = fs.readdirSync(dir);
    return files
        .filter(file => file.endsWith('.md') && !file.endsWith('-toc.md'))
        .map(file => path.join(dir, file))
        .sort();
}

function generateFileTOC(filePath) {
    const fileName = path.basename(filePath, '.md');
    const originalFileName = path.basename(filePath);
    const headers = extractTOCWithLines(filePath);
    
    if (headers.length === 0) return null;
    
    let toc = `# Table of Contents - ${fileName}\n\n`;
    toc += `**This is a TOC for the ${originalFileName} document.** You will find the document in the same directory. `;
    toc += `This list will make it easier for you to find relevant content in long .md documents.\n\n`;
    toc += `> Generated automatically with line number references for targeted reading\n\n`;
    
    headers.forEach(header => {
        const indent = '  '.repeat(header.level - 1);
        const tocEntry = `${indent}- **${header.title}** (read lines ${header.range})\n`;
        toc += tocEntry;
    });
    
    return toc;
}

// Execute the extraction
try {
    console.log('Scanning directory:', path.resolve(targetDir));
    const markdownFiles = getAllMarkdownFiles(targetDir);
    
    if (markdownFiles.length === 0) {
        console.log('No markdown files found in directory');
        process.exit(0);
    }
    
    console.log(`Found ${markdownFiles.length} markdown files:`);
    
    let tocFilesCreated = 0;
    
    markdownFiles.forEach(filePath => {
        const fileName = path.basename(filePath);
        const toc = generateFileTOC(filePath);
        
        if (toc) {
            const tocFileName = path.basename(filePath, '.md') + '-toc.md';
            const tocFilePath = path.join(targetDir, tocFileName);
            
            fs.writeFileSync(tocFilePath, toc);
            console.log(`  ${fileName}: ${extractTOCWithLines(filePath).length} headers → ${tocFileName}`);
            tocFilesCreated++;
        } else {
            console.log(`  ${fileName}: no headers found, skipping`);
        }
    });
    
    console.log(`\nGenerated ${tocFilesCreated} TOC files`);
    
} catch (error) {
    console.error('Error extracting TOCs:', error.message);
    process.exit(1);
}