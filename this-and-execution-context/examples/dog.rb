require 'pry'

class Dog
  attr_accessor :first_name, :snacks

  @@all = []

  def initialize(first_name, snacks) 
    @first_name = first_name
    @snacks = snacks
    @@all << self
  end 

  def say_name
    # in Ruby, self in an instance method refers to the instance.
    puts "woof my name is #{self.first_name}"
  end

  def say_fav_snacks
    self.snacks.each do |snack|
      puts "#{self.first_name} likes #{snack}"
    end
  end

  def self.find_by_name(name)
    # in Ruby, self in a class method refers to the instance.
    self.all.find { |dog_instance| dog_instance.first_name == name }
  end

  def self.all
    @@all
  end
end

binding.pry