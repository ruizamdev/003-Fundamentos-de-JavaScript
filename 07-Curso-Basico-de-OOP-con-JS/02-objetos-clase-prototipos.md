# Objetos, clases y prototipos

## Que es un objeto en JavaScript

Todos los lenguajes de programacion tienen tipos y estructuras de datos.

Array en JavaScript:

```javascript
const student_platziRank = [
  'Juan',
  'Juanita',
  'Nath',
  'Nora',
  'Luisa',
]
```

Array en PHP:

```php
$student_platzirank = [
  "Juan",
  "Juanita",
  "Nath",
  "Nora",
  "Luisa",
]
```

Array asociativo en PHP:

```php
$student_platzirank = [
  "Juan" => 110,
  "Juanita" => 300,
  "Nath" => 700,
  "Nora" => 150,
  "Luisa" => 0,
]
```

Array asociativo en Python:

```python
student_platzirank = {
  'Juan': 100,
  'Juanita': 300,
  'Nath': 700,
  'Nora': 150,
  'Luisa': 0,
}
```

Objeto Literal en JavaScript:

```javascript
const student_platzirank = {
  'Juan': 110,
  'Juanita': 300,
  'Nath': 700,
  'Nora': 150,
  'Luisa': 0
}
```

Los objetos literales no son lo mismo que los objetos de la OOP (de las instancias y clases)

### Objetos en lenguajes de programacion que admiten la OOP basada en clases

```php
class Student {
  public $name = 'Nombre';
  public $age = 18;
  public $points = 750;
}

$juanita = new Student;
```

```python
class Student:
    name = 'Nombre'
    age = 18
    points = 750

juanita = Student();
```

```javascript
function Student() {
  this.name = 'Nombre';
  this.age = 18;
  this.pints = 750;
}

const juanita = new Student();
```

## Objetos literales y Prototipos en JavaScript