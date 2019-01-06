defmodule CeresWeb.Router do
  use CeresWeb, :router

  pipeline :api do
    plug(:accepts, ["json"])
  end

  scope "/api", CeresWeb do
    pipe_through(:api)
  end
end
