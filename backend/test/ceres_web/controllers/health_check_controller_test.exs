defmodule CeresWeb.HealthCheckControllerTest do
  use CeresWeb.ConnCase, async: true

  describe "show/2" do
    test "it is healthy", %{conn: conn} do
      response =
        build_conn()
        |> get(health_check_path(conn, :show))
        |> doc(
          description: "Simple health check for the application",
          operation_id: "health_check"
        )
        |> json_response(200)

      assert %{
        "status" => "Healthy!"
      } = response
    end
  end
end
