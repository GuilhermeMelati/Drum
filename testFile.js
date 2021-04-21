function houseKepperFactory(yearsOfExperience, name, age, cleannerSkills) {
    this.yearsOfExperience = yearsOfExperience
    this.name = name
    this.age = age
    this.cleannerSkills = cleannerSkills
}

houseKepper1 = new houseKepperFactory(4, "Julia", 24, ["limpar", "passar", "cozinhar"])
houseKepper2 = new houseKepperFactory(2, "Carol", 29, ["limpar", "passar"])
houseKepper3= new houseKepperFactory(5, "Carlos", 31, ["limpar", "passar"])

console.log(`Olá meu nome é ${houseKepper1.name}, eu tenho ${houseKepper1.age} anos, com mais de ${houseKepper1.yearsOfExperience} anos na área. Além disso sei ${houseKepper1.cleannerSkills}!`)
console.log(`Olá meu nome é ${houseKepper2.name}, eu tenho ${houseKepper2.age} anos, com mais de ${houseKepper2.yearsOfExperience} anos na área. Além disso sei ${houseKepper2.cleannerSkills}!`)
console.log(`Olá meu nome é ${houseKepper3.name}, eu tenho ${houseKepper3.age} anos, com mais de ${houseKepper3.yearsOfExperience} anos na área. Além disso sei ${houseKepper3.cleannerSkills}!`)