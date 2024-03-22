# Shape Factory

Welcome to Shape Factory! This application allows you to dynamically create squares and circles 
inside a grid container using ```HTML``` , ```CSS``` , and ```JavaScript``` .

### How to use

- Select 'Shape' between 'circle' and 'square'.
- Select a specific colour from the provided options.
- Click on the 'Create' button.

### JavaScript Class

```JavaScript
class Shape {
  constructor(name, colour) {
    this._name = name;
    this._colour = colour;
  }

  get name() {
    return this._name;
  }

  get colour() {
    return this._colour;
  }

  getInfo() {
    return `${this._colour} ${this._name}`;
  }
}
```

### Technologies Used

![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

### Contributions

Worked with [Manpreet_Kaur](https://github.com/dhillxnm) for this project.

## Demo

Click [here](https://navjot0210.github.io/shape-factory/) to test the application.



Thank you for using Shape Factory! Happy coding! 🎉