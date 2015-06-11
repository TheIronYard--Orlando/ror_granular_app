class Restaurant < ActiveRecord::Base
  serialize :hours

  def hours_day(day)
    "#{hours[day]["Open"]} - #{hours[day]["Closed"]}"
  end

end
