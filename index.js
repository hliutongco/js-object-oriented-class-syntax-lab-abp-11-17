class BoardMember{
  constructor(name, homeState, training){
    this.name=name;
    this.homeState=homeState;
    this.training=training;
  }
  veto(){
    return "No, I must disagree";
  }
  doCharity() {
    return "I like to help people."
  }
  
}
