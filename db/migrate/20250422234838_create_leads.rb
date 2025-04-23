class CreateLeads < ActiveRecord::Migration[8.0]
  def change
    create_table :leads do |t|
      t.string :full_name
      t.string :email_address

      t.timestamps
    end
    add_index :leads, :email_address
  end
end
