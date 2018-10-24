defmodule Ceres.OrdersTest do
  use Ceres.DataCase

  alias Ceres.Orders

  describe "orders" do
    alias Ceres.Orders.Order

    @valid_attrs %{delivery: 120.5, restaurant: "some restaurant", status: "some status", tips: 120.5, url: "some url"}
    @update_attrs %{delivery: 456.7, restaurant: "some updated restaurant", status: "some updated status", tips: 456.7, url: "some updated url"}
    @invalid_attrs %{delivery: nil, restaurant: nil, status: nil, tips: nil, url: nil}

    def order_fixture(attrs \\ %{}) do
      {:ok, order} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Orders.create_order()

      order
    end

    test "list_orders/0 returns all orders" do
      order = order_fixture()
      assert Orders.list_orders() == [order]
    end

    test "get_order!/1 returns the order with given id" do
      order = order_fixture()
      assert Orders.get_order!(order.id) == order
    end

    test "create_order/1 with valid data creates a order" do
      assert {:ok, %Order{} = order} = Orders.create_order(@valid_attrs)
      assert order.delivery == 120.5
      assert order.restaurant == "some restaurant"
      assert order.status == "some status"
      assert order.tips == 120.5
      assert order.url == "some url"
    end

    test "create_order/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Orders.create_order(@invalid_attrs)
    end

    test "update_order/2 with valid data updates the order" do
      order = order_fixture()
      assert {:ok, order} = Orders.update_order(order, @update_attrs)
      assert %Order{} = order
      assert order.delivery == 456.7
      assert order.restaurant == "some updated restaurant"
      assert order.status == "some updated status"
      assert order.tips == 456.7
      assert order.url == "some updated url"
    end

    test "update_order/2 with invalid data returns error changeset" do
      order = order_fixture()
      assert {:error, %Ecto.Changeset{}} = Orders.update_order(order, @invalid_attrs)
      assert order == Orders.get_order!(order.id)
    end

    test "delete_order/1 deletes the order" do
      order = order_fixture()
      assert {:ok, %Order{}} = Orders.delete_order(order)
      assert_raise Ecto.NoResultsError, fn -> Orders.get_order!(order.id) end
    end

    test "change_order/1 returns a order changeset" do
      order = order_fixture()
      assert %Ecto.Changeset{} = Orders.change_order(order)
    end
  end
end
