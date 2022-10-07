const express = require("express");
const promotionRouter = express.Router();

promotionRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text-plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the promotions to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the promotions ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation is not supported on promotions");
  })
  .delete((req, res) => {
    res.end("Deleting all promotions");
  });

// Promotion router for promotionId
promotionRouter
  .route("/:promotionId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(
      `Will send the detailes of the promotion: ${req.params.promotionId} to you`
    );
  })

  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation is not allowed on .promotions/${req.params.promotionId}`
    );
  })

  .put((req, res) => {
    res.write(`Updating promotions: ${req.params.promotionId}\n`);
    res.end(`Will update promotions: ${req.body.name}
    with description: ${req.body.description}`);
  })

  .delete((req, res) => {
    res.end(`Deleting promotions: ${req.params.promotionId}`);
  });

module.exports = promotionRouter;
