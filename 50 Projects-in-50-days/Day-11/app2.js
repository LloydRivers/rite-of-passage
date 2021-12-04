class School {
    constructor(name,level,numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    
        get name() {
          return this._name;
        }
        get level() {
          return this._level;
        }
        get numberOfStudents() {
          return  this._numberOfStudents;
        }
    
    
    quickFacts() {
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers) {
      const random = Math.floor(Math.random() * substituteTeachers.length) 
      return substituteTeachers[random];
  }
    set numberOfStudents(value) {
      // if(value.Nan())
      if(typeof value === 'number') {
        return this._numberOfStudents = value
      } else {
        console.log("Invalid input: numberOfStudents must be set to a Number.")
      }
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
  super(name, "primary", numberOfStudents);
  this._pickupPolicy = pickupPolicy;
  }
  
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}


class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
  super(name,'high', numberOfStudents);
  this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514, "Students must be picked up by a parent, guardian, or a family member over the age of 13.");

lorraineHansbury.quickFacts();



