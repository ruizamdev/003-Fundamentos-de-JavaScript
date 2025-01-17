# Hash Tables

Los hash tables se pueden conocer de diferentes maneras dependiendo el lenguaje de programacion, por ejemplo, tenemos la siguiente tabla para comparar sus diferentes formas de nombrarlas:

Lenguaje | Nombre
:---: | :---:
JavaScript | Objetos
Python | Diccionarios
Java | Maps
Go | Maps
Ruby | Hashes

La anatomia de un hash table, es similar a la de un objeto, ya que utilizan la misma manera de almacenar la informacion:
En la que tenemos "keys" las cuales a su ves tienen "values"

```javascript
{
  "nombre": "Armando",
  "nacionalidad": "Mexicano"
}

```

La diferencia con los objetos es que las hash tables cuentan con una función especial denominada **"Hash function"** las cual nos permite mapear claves e indices dentro de la tabla. Esto permite una busqueda, inserción y eliminación más eficiente.

## ¿Cómo funciona?

- La clave pasa por la función hash, la función crea un hash que se ligara a la clave y a partir de aquí será siempre el mismo.
- La clave es almacenada en una dirección de memoria junto con su valor, el cual es denominada bucket.

En resumen un hash table es un objeto con un paso intermedio en el cual se crea un hash para poder mapear las claves en memoria y acceder más rapidamente a ellas.

### Metodos

Metodo | Accion
:---: | :---:
insert | insertar un elemento en la tabla
search | Buscar n elemento por key
delete | Borrar un elemento

### Colision de Hash table

Hasta ahora hemos visto las ventajas o difererncias de trabajar con las hash table, pero exite una desventaja que nos puede causar problemas a la hora de utilizarlas, las denominadas colisiones.

Las colisiones de hash table ocurren cuando dos claves obtienen un mismo hash.

