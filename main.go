package main

import (
	"net/http"
	"os"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

const (
	DEFAULT_PORT = "3000"
)


func init() {
	// Read env variables from .env file in the root directory
	if err := godotenv.Load(); err != nil {
		panic(err)
	}
}

func main() {
	// Set the router as the default one shipped with Gin
	router := gin.Default()

	// Serve frontend static files
	router.Use(static.Serve("/", static.LocalFile("./views", true)))

	// Setup route group for the API
	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H {
				"message": "pong",
			})
		})
	}

	port := os.Getenv("PORT"); if port == "" {
		port = DEFAULT_PORT
	}
	_ = router.Run(":" + port)
}