class Animal
  attr_accessor :first_name

  def initialize(first_name)
    @first_name = first_name
  end

  def say_name
    puts "my name is #{self.first_name}"
  end
  
end # end of Animal class


class Dog < Animal
  attr_accessor :fav_snacks

  def initialize(first_name, fav_snacks)
    super(first_name)
    @fav_snacks = fav_snacks
  end

end # end of Dog class


class Cat < Animal
  attr_accessor :num_lives

  def initialize(first_name)
    super(first_name)
    @num_lives = 9
  end

end # end of Cat class

dog = Dog.new("Fezzik", ["Peanut Butter"])
dog.say_name