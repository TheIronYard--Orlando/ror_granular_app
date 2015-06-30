class Restaurant < ActiveRecord::Base
 
  has_many :daily_schedules

  protected

    def set_hours
      self.hours ||= []
    end
end
