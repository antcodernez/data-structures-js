//Manera basica
const array = ["Jesús", "Manuel", "Aurora", "Priscila"]; 
console.log(array);

array.push("Juan");
array.unshift("Pedrito");
console.log(array);

//arrays con clases
console.log("Array con clases")
class MyArray 
    {
        constructor()
            {
                this.lenght = 0;
                this.data = {};
            }
        get(index)
            {
                return this.data[index];
            }
        push(item)
            {
                this.data[this.lenght] = item;
                this.lenght++;
                return this.data;
                //Agregar un elemento al final de mi arreglo
            }
    }

const arrayMioMami = new MyArray();
arrayMioMami.push("Algo xd");
arrayMioMami.push("item 2");
console.log(arrayMioMami.get(1));
console.log(arrayMioMami);
