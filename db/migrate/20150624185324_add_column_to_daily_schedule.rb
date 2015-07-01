class AddColumnToDailySchedule < ActiveRecord::Migration
  def change
    add_column :daily_schedules, :restaurant_id, :integer
  end
end
