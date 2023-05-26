const str = "precious infosystem pvt lmt";
const remove = (str) =>
{
    return str.replace(/\s/g, '' );
}
console.log(remove(str));
