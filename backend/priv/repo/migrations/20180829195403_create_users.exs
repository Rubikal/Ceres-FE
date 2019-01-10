defmodule Ceres.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add(:name, :string)
      add(:slack_id, :string)
      add(:slack_token, :string)
      add(:avatar, :string)
      add(:wallet, :float, default: 0)

      timestamps()
    end
  end
end
