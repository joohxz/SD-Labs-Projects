CREATE TABLE "User" (
  "Id" SERIAL PRIMARY KEY,
  "Password" VARCHAR NOT NULL,
  "SubscriptionType" VARCHAR NOT NULL,
  "Bio" VARCHAR,
  "Email" VARCHAR UNIQUE NOT NULL,
  "FirstName" VARCHAR NOT NULL,
  "LastName" VARCHAR NOT NULL,
  "ProfilePicture" BYTEA,
  "Username" VARCHAR UNIQUE NOT NULL,
  "UserType" VARCHAR NOT NULL
);

CREATE TABLE "Team" (
  "Id" SERIAL PRIMARY KEY,
  "Users" INTEGER[]
);

CREATE TABLE "Risk" (
  "Id" SERIAL PRIMARY KEY,
  "Creator" INTEGER,
  "Comments" INTEGER,
  "Causes" VARCHAR[],
  "Date" TIMESTAMP,
  "Description" VARCHAR,
  "Effects" VARCHAR[],
  "Industry" VARCHAR,
  "Mitigations" VARCHAR[],
  "Regions" VARCHAR[],
  "RiskType" VARCHAR,
  "Score" FLOAT,
  "Title" VARCHAR,
  "Votes" INTEGER
);

CREATE TABLE "RiskProfile" (
  "Id" SERIAL PRIMARY KEY,
  "Creator" INTEGER,
  "Risks" INTEGER,
  "Concepts" INTEGER,
  "Impacts" INTEGER,
  "Score" INTEGER,
  "Detail" VARCHAR
);

CREATE TABLE "Comment" (
  "Id" SERIAL PRIMARY KEY,
  "Dislikes" INTEGER,
  "Likes" INTEGER,
  "Text" VARCHAR NOT NULL
);

CREATE TABLE "Like" (
  "Id" SERIAL PRIMARY KEY,
  "Date" TIMESTAMP
);

CREATE TABLE "Dislike" (
  "Id" SERIAL PRIMARY KEY,
  "Date" TIMESTAMP
);

CREATE TABLE "Thread" (
  "Id" SERIAL PRIMARY KEY,
  "Risks" VARCHAR[]
);

CREATE TABLE "Opportunities" (
  "Id" SERIAL PRIMARY KEY,
  "Risks" VARCHAR[]
);

CREATE TABLE "VerifiedUsers" (
  "Id" SERIAL PRIMARY KEY,
  "Users" INTEGER[]
);

CREATE TABLE "ProfessionalUsers" (
  "Id" SERIAL PRIMARY KEY,
  "Users" INTEGER[]
);

CREATE TABLE "Ban" (
  "Id" SERIAL PRIMARY KEY,
  "User" INTEGER,
  "Date" TIMESTAMP,
  "EndDuration" DATE
);

CREATE TABLE "Subscription" (
  "Id" SERIAL,
  "Price" FLOAT,
  "Title" VARCHAR,
  PRIMARY KEY ("Id")
);

CREATE TABLE "Buy" (
  "Id" SERIAL PRIMARY KEY,
  "SubscriptionType" INTEGER,
  "User" INTEGER,
  "Date" TIMESTAMP,
  "EndDuration" DATE
);

CREATE TABLE "PasswordHistory" (
  "Id" SERIAL PRIMARY KEY,
  "Password" VARCHAR,
  "User" INTEGER
);

CREATE TABLE "RiskProfileConcepts" (
  "Id" SERIAL PRIMARY KEY,
  "Terminate" VARCHAR,
  "Tolerate" VARCHAR,
  "Transfer" VARCHAR,
  "Treat" VARCHAR
);

CREATE TABLE "Impact" (
  "Id" SERIAL PRIMARY KEY,
  "Description" VARCHAR,
  "Title" VARCHAR
);

CREATE TABLE "Topic" (
  "Id" SERIAL PRIMARY KEY,
  "Risks" INTEGER[],
  "Title" VARCHAR UNIQUE
);

CREATE TABLE "ThreadConcepts" (
  "Id" SERIAL PRIMARY KEY,
  "Countries" VARCHAR[]
);

CREATE TABLE "OpportunitiesConcepts" (
  "Id" SERIAL PRIMARY KEY,
  "Countries" VARCHAR[]
);

CREATE TABLE "Vote" (
  "Id" SERIAL PRIMARY KEY,
  "User" INTEGER,
  "Risk" INTEGER,
  "Value" BOOLEAN
);

ALTER TABLE "Risk" ADD FOREIGN KEY ("Creator") REFERENCES "User" ("Id");

ALTER TABLE "RiskProfile" ADD FOREIGN KEY ("Creator") REFERENCES "User" ("Id");

ALTER TABLE "Risk" ADD FOREIGN KEY ("Id") REFERENCES "RiskProfile" ("Risks");

ALTER TABLE "Comment" ADD FOREIGN KEY ("Id") REFERENCES "Risk" ("Comments");

ALTER TABLE "Like" ADD FOREIGN KEY ("Id") REFERENCES "Comment" ("Likes");

ALTER TABLE "Dislike" ADD FOREIGN KEY ("Id") REFERENCES "Comment" ("Dislikes");

ALTER TABLE "User" ADD FOREIGN KEY ("Id") REFERENCES "Team" ("Users");

ALTER TABLE "Risk" ADD FOREIGN KEY ("Id") REFERENCES "Thread" ("Risks");

ALTER TABLE "Risk" ADD FOREIGN KEY ("Id") REFERENCES "Opportunities" ("Risks");

ALTER TABLE "User" ADD FOREIGN KEY ("Id") REFERENCES "VerifiedUsers" ("Users");

ALTER TABLE "User" ADD FOREIGN KEY ("Id") REFERENCES "ProfessionalUsers" ("Users");

ALTER TABLE "User" ADD FOREIGN KEY ("Id") REFERENCES "Ban" ("User");

ALTER TABLE "User" ADD FOREIGN KEY ("SubscriptionType") REFERENCES "Subscription" ("Id");

ALTER TABLE "Buy" ADD FOREIGN KEY ("SubscriptionType") REFERENCES "Subscription" ("Id");

ALTER TABLE "User" ADD FOREIGN KEY ("Id") REFERENCES "Buy" ("User");

ALTER TABLE "User" ADD FOREIGN KEY ("Id") REFERENCES "PasswordHistory" ("User");

ALTER TABLE "User" ADD FOREIGN KEY ("Password") REFERENCES "PasswordHistory" ("Password");

ALTER TABLE "RiskProfile" ADD FOREIGN KEY ("Concepts") REFERENCES "RiskProfileConcepts" ("Id");

ALTER TABLE "Impact" ADD FOREIGN KEY ("Id") REFERENCES "RiskProfile" ("Impacts");

ALTER TABLE "Risk" ADD FOREIGN KEY ("Id") REFERENCES "Topic" ("Risks");

ALTER TABLE "Vote" ADD FOREIGN KEY ("Id") REFERENCES "Risk" ("Votes");

ALTER TABLE "User" ADD FOREIGN KEY ("Id") REFERENCES "Vote" ("User");