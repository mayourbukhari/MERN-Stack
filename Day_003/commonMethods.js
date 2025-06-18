// common Methods for Day 3 for practice 
// it include methods like str.length, str.toUpperCase(), str.toLowerCase(), str.indexOf(), str.lastIndexOf(), str.slice(), str.substring(), str.substr(), str.replace(), str.split(), str.trim(), str.charAt(), str.charCodeAt(), str.concat(), str.includes(), str.startsWith(), str.endsWith()
// str.match(), str.search(), str.repeat(), str.padStart(), str.padEnd(), str.split(), str.join(), str.toString(), str.valueOf(), str.localeCompare(), str.normalize(),

let str = "Hello, World!";

    console.log("Length:", str.length);
    console.log("Uppercase:", str.toUpperCase());
    console.log("Lowercase:", str.toLowerCase());
    console.log("Index of 'World':", str.indexOf('World'));
    console.log("Last Index of 'o':", str.lastIndexOf('o'));
    console.log("Slice (0, 5):", str.slice(0, 5));
    console.log("Substring (0, 5):", str.substring(0, 5));
    console.log("Substr (0, 5):", str.substr(0, 5));
    console.log("Replace 'World' with 'Everyone':", str.replace('World', 'Everyone'));
    console.log("Split by ',':", str.split(','));
    console.log("Trim:", "   Hello   ".trim());
    console.log("Char at index 1:", str.charAt(1));
    console.log("Char code at index 1:", str.charCodeAt(1));
    console.log("Concatenation with ' How are you?':", str.concat(' How are you?'));
    console.log("Includes 'Hello':", str.includes('Hello'));
    console.log("Starts with 'Hello':", str.startsWith('Hello'));
    console.log("Ends with '!':", str.endsWith('!'));


    console.log("Match 'World':", str.match(/World/));
    console.log("Search for 'World':", str.search('World'));
    console.log("Repeat 3 times:", str.repeat(3));
    console.log("Pad Start with '***':", str.padStart(20, '*'));
    console.log("Pad End with '***':", str.padEnd(20, '*'));
    console.log("Join array ['Hello', 'World']:", ['Hello', 'World'].join(' '));
    console.log("To String:", str.toString());
    console.log("Value Of:", str.valueOf());
    console.log("Locale Compare with 'Hello, World!':", str.localeCompare('Hello, World!'));
    console.log("Normalize:", str.normalize());

