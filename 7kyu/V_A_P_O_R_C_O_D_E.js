function vaporcode(string) {
    let a = string.toUpperCase();
    return a.split(" ").join("").split("").join("  ");
}