defmodule Ceres.Repo.Migrations.CreateOrders do
  use Ecto.Migration

  def change do
    create table(:orders) do
      add(:restaurant, :string)
      add(:url, :string)
      add(:status, :string, default: "collecting")
      add(:delivery, :float)
      add(:tips, :float)
      add(:creator_id, references(:users, on_delete: :nothing))

      timestamps()
    end

    create(index(:orders, [:creator_id]))
  end
end
