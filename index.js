const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching (array, string){
    return array.filter(function (element){   
        if (element === string){
            return element;
        }
        else if (element === string.toLowerCase()){
            return element;
        }
        else{
        }  
    }); 
}
console.log(findMatching(drivers, 'bobby'));

function fuzzyMatch (array, string){
    return array.filter(function (element){
        if (element.indexOf(string) === 0){
            return element;
        }
        else { 
        }
    });
};
console.log(fuzzyMatch(drivers, "S"));

function matchName(array, string){
    return array.filter(function (element) {
        if (element.name === string){
            return element;
        }
        else{}
    });
}

const drivers2 = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];
console.log(matchName(drivers2, "Sally"));