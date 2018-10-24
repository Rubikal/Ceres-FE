defmodule Ceres.Orders.Order do
  use Ecto.Schema
  import Ecto.Changeset


  schema "orders" do
    field :delivery, :float
    field :restaurant, :string
    field :status, :string
    field :tips, :float
    field :url, :string
    field :creator_id, :id

    timestamps()
  end

  @doc false
  def changeset(order, attrs) do
    order
    |> cast(attrs, [:restaurant, :url, :status, :delivery, :tips])
    |> validate_required([:restaurant, :url, :status, :delivery, :tips])
  end
end
