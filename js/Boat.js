class Boat {
    constructor(x, y, w, h, a) 
    {
      var options = {
        restitution: 0.2
      }
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = w;
      this.h = h;
      this.a = a
      this.speed = 0.03
      World.add(world, this.body);
    }
    animate(){
      this.speed = this.speed + 0.03
    }
  
    display() {
      var index = Math.floor(this.speed%this.a.length)
      push();
      imageMode(CENTER);
      image(this.a[index], this.body.position.x, this.body.position.y, this.w, this.h);
      pop();
    }

    remove(index){
      this.a = brokenAni
      this.w = 300
      this.h = 300
      setTimeout(function(){
        World.remove(world, boats[index].body)
        delete boats[index]
      },700 )
    }
  }
  