class DiscordUser {
    constructor( 
      public name: string, 
      public discriminator: string,
      public id: string 
    ) {}
  
    fullName() {
      return this.name + "#" + this.discriminator
    }
  }
  
  export let user = new DiscordUser("deadrushi", '1099', '808076610766766101');