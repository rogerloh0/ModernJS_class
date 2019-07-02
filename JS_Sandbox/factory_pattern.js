function MemberFactory(){
  this.createMember = function(name, type) {
    let member;

    if(type === 'simple'){
      member = new SimpleMembership(name);
    } else if(type === 'standard'){
      member = new StandardMembership(name);
    } else if(type === 'super'){
      member = new SuperMembership(name);
    }

    member.typ = type;

    member.define = function(){
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }

    return member;
  }
}


const SimpleMembership = function(name){
  this.name = name;
  this.cost = '$5';
}
const StandardMembership = function(name){
  this.name = name;
  this.cost = '$15';
}
const SuperMembership = function(name){
  this.name = name;
  this.cost = '$25';
}

const member = [];
const factory = new MemberFactory();

member.push(factory.createMember('John Doe', 'simple'))

console.log(member);