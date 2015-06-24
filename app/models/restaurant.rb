class Restaurant < ActiveRecord::Base
 
  serialize :hours   
  before_create :set_hours
  has_many :daily_schedules

  protected

    def set_hours
      self.hours ||= []
    end
end
