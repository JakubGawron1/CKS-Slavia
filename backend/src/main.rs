use axum::{http::{header::{ACCEPT, AUTHORIZATION, ORIGIN}, HeaderValue, Method}, routing::get, Json, Router};
use sqlx::PgPool;
use tower_http::cors::{Any, CorsLayer};


#[derive(Clone)]
struct AppState{
    database: PgPool,
}

async fn hello_world() -> &'static str {
    "Hello, world!"
}

#[shuttle_runtime::main]
async fn main(
    #[shuttle_shared_db::Postgres(
        local_uri = "postgres://postgres:Kuba9087@localhost:5432/postgres"
    )]
     database: PgPool
) -> shuttle_axum::ShuttleAxum {

    let parsed = r#"

{
    "code": 200,
    "success": true,
    "payload": {
        "features": [
            "awesome",
            "easyAPI",
            "lowLearningCurve"
        ]
    }
}

"#;

    let state = AppState{
        database,
    };
    let origins = [
    "http://localhost:3000".parse().unwrap(),
    "https://cks-slavia.vercel.app".parse().unwrap(),
    "https://cks-slavia-jakubgawron2s-projects.vercel.app".parse().unwrap(),
    "https://cks-slavia-git-main-jakubgawron2s-projects.vercel.app/".parse().unwrap()
];

    let cors = CorsLayer::new()
        .allow_credentials(true)
        .allow_origin(origins) // Any for testing 
        .allow_headers(vec![ORIGIN, AUTHORIZATION, ACCEPT])
        .allow_methods(vec![Method::GET, Method::POST, Method::PUT, Method::DELETE]);

    let app = Router::new()
    .route("/", get(Json(parsed)))
    .layer(cors)
    .with_state(state);

    Ok(app.into())
}
