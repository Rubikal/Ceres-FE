defmodule Ceres.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset


  schema "users" do
    field :avatar, :string
    field :name, :string
    field :slack_id, :string
    field :slack_token, :string
    field :wallet, :float

    timestamps(type: utc_datetime)
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :slack_id, :slack_token, :avatar, :wallet])
    |> validate_required([:name, :slack_id, :slack_token, :avatar, :wallet])
  end
end
