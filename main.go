package main

import (
	"net/http"
	"os"
	"strconv"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)


type MagnetLink struct {
	ID     int     `json:"id" binding:"required"`
	Downloads  int     `json:"downloads"`
	MagnetLink   string  `json:"magnet_link" binding:"required"`
}

var magnetLinks = []MagnetLink{
	MagnetLink{1, 0, "magnet:?xt=urn:sha1:fake_magnet_1"},
	MagnetLink{2, 0, "magnet:?xt=urn:sha1:fake_magnet_2"},
	MagnetLink{3, 0, "magnet:?xt=urn:sha1:fake_magnet_3"},
	MagnetLink{4, 0, "magnet:?xt=urn:sha1:fake_magnet_4"},
	MagnetLink{5, 0, "magnet:?xt=urn:sha1:fake_magnet_5"},
	MagnetLink{6, 0, "magnet:?xt=urn:sha1:fake_magnet_6"},
	MagnetLink{7, 0, "magnet:?xt=urn:sha1:fake_magnet_7"},
}

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
	router.Use(static.Serve("/", static.LocalFile("./frontend/public", true)))

	// Setup route group for the API
	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H {
				"message": "pong",
			})
		})
	}

	api.GET("/links", MagnetLinksHandler)
	api.POST("/links/download/:magnetLinkID", DownloadMagnetLinks)

	port := os.Getenv("PORT"); if port == "" {
		port = DEFAULT_PORT
	}
	_ = router.Run(":" + port)
}

func MagnetLinksHandler(c *gin.Context) {
	c.Header("Content-Type", "application/json")
	c.JSON(http.StatusOK, magnetLinks)
}

func DownloadMagnetLinks(c *gin.Context) {
	c.Header("Content-Type", "application/json")

	if magnetLinkId, err := strconv.Atoi(c.Param("magnetLinkID")); err == nil {
		var magnetLink = MagnetLink{}
		for i := 0; i < len(magnetLinks); i++ {
			if magnetLinks[i].ID == magnetLinkId {
				magnetLinks[i].Downloads += 1
				magnetLink = magnetLinks[i]
			}
		}
		c.JSON(http.StatusOK, &magnetLink)
	} else {
		c.AbortWithStatus(http.StatusNotFound)
	}
}