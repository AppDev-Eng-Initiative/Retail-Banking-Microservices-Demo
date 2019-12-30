package main

import (
	"context"
	"encoding/json"
	"net/http"
	"os"

	"log"
	"strings"
	"github.com/gorilla/mux"
	"strconv"

	"golang.org/x/oauth2/google"
	"google.golang.org/api/option"

	"cloud.google.com/go/datastore"
)

// Kind in Datastore
type User struct {
	UserID         int64   `json: "userid"`
	Username       string  `json: "username"`
	Address        string  `json: "address"`
	Email          string  `json: "email"`
	Password       string  `json: "password"`
	PhoneNumber    int64   `json: "phonenumber"`
	AccountBalance float64 `json: "accountbalance"`
}

var dsClient *datastore.Client

func main() {
	ctx := context.Background()

	var err error
	creds, err := google.CredentialsFromJSON(ctx, []byte(os.Getenv("GOOGLE_APPLICATION_CREDENTIALS")), datastore.ScopeDatastore)
	if err != nil {
		// TODO: handle error.
	}
	// TODO: get project ID from gae context
	dsClient, err = datastore.NewClient(ctx, os.Getenv("PROJECT_ID"), option.WithCredentials(creds))
	//dsClient, err = datastore.NewClient(ctx, appengine.AppID(ctx))

	if err != nil {
		log.Fatal(err)
	}

	registerHandlers()
}

func registerHandlers() {
	r := mux.NewRouter()
	r.HandleFunc("/user", createHandler).Methods("POST")
	r.HandleFunc("/user", listHandler).Methods("GET")
	r.HandleFunc("/user/{id}", readHandler).Methods("GET")
	r.HandleFunc("/user/{id}", deleteHandler).Methods("DELETE")
	r.HandleFunc("/user/{id}", updateHandler).Methods("PUT")
	log.Fatal(http.ListenAndServe(":8080", r))
}

// createHandler adds a user to the database.
func createHandler(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	key := datastore.IncompleteKey("User", nil)
	if _, err := dsClient.Put(ctx, key, &user); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func listHandler(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	user := make([]*User, 0)
	q := datastore.NewQuery("User")
	if _, err := dsClient.GetAll(ctx, q, &user); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	res, _ := json.Marshal(&user)
	w.Write(res)
}

func readHandler(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	id, err := strconv.Atoi(strings.TrimPrefix(r.URL.Path, "/user/"))
	if err != nil {
		// change error to invalid ID (should be an int)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	user := make([]*User, 0)
	q := datastore.NewQuery("User").Filter("UserID =", id)
	if _, err := dsClient.GetAll(ctx, q, &user); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	res, _ := json.Marshal(&user)
	w.Write(res)
}

func deleteHandler(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	id, err := strconv.Atoi(strings.TrimPrefix(r.URL.Path, "/user/"))
	if err != nil {
		// todo: change error to invalid ID (should be an int)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	user := make([]*User, 0)
	q := datastore.NewQuery("User").Filter("UserID =", id)
	keys, err := dsClient.GetAll(ctx, q, &user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	// todo: fix error message
	if err := dsClient.DeleteMulti(ctx, keys); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

// createHandler adds a user to the database.
func updateHandler(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	id, err := strconv.Atoi(strings.TrimPrefix(r.URL.Path, "/user/"))
	if err != nil {
		// todo: change error to invalid ID (should be an int)
		http.Error(w, err.Error(), http.StatusPaymentRequired)
		return
	}
	users := make([]*User, 0)
	q := datastore.NewQuery("User").Filter("UserID =", id)
	keys, err := dsClient.GetAll(ctx, q, &users)
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}

	var user User
	err = json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if _, err := dsClient.Put(ctx, keys[0], &user); err != nil {
		http.Error(w, err.Error(), http.StatusPermanentRedirect)
		return
	}
}
