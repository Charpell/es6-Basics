const team = {
  menmbers: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.menmbers.map(function(member) {
      return `${member} is on team ${this.teamName}`
    })
  }
}

const result = team.teamSummary()

// console.log(result) 

// This will read cannot read property 'teamName' of undefined

// There are 3 ways to solve this problem

// Method 1
const team1 = {
  menmbers: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.menmbers.map(function(member) {
      return `${member} is on team ${this.teamName}`
    }.bind(this))
  }
}

const result1 = team1.teamSummary()

// console.log(result1) 



// Method 2
const team2 = {
  menmbers: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    var self = this
    return this.menmbers.map(function(member) {
      return `${member} is on team ${self.teamName}`
    })
  }
}

const result2 = team2.teamSummary()

// console.log(result2)


// Method 3
const team3 = {
  menmbers: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.menmbers.map((member) => {
      return `${member} is on team ${this.teamName}`
    })
  }
}

const result3 = team3.teamSummary()

console.log(result3)
