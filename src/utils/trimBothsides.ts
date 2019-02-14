export default function( str: string) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}
