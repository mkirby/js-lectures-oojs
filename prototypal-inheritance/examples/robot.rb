class Robot
  attr_reader :name, :weight, :specialty

  def initialize(name, weight, specialty)
    @name = name
    @weight = weight
    @specialty = specialty
  end

  def recharge_batteries
    puts "#{self.name} is recharging its batteries"
  end

end

robot1 = Robot.new('sparko', 1000, 'making sparks')
robot1.recharge_batteries #=> sparko is recharging its batteries