defmodule Ceres.Accounts.User do
  @moduledoc """
  An employee working in the organization. The user sign-in into the system using his Slack account.
  We require all the fields to be existing in the user record.
  """

  use Ecto.Schema

  import Ecto.Changeset

  alias Ceres.Orders.Order

  schema "users" do
    field(:name, :string)
    field(:slack_id, :string)
    field(:slack_token, :string)
    field(:avatar, :string)
    field(:wallet, :float, default: 0)

    has_many(:orders, Order, foreign_key: :creator_id)

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [
      :name,
      :slack_id,
      :slack_token,
      :avatar,
      :wallet,
    ])
    |> validate_required([
      :name,
      :slack_id,
      :slack_token,
      :avatar,
      :wallet,
    ])
  end
end
