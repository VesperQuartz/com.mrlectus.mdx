import * as fs from "node:fs";
import { algoliasearch } from "algoliasearch";
import { DocumentRecord, sync } from "fumadocs-core/search/algolia";
import { env } from "@/env/server";

// the path of pre-rendered `static.json`, choose one according to your React framework
const filePath = {
	next: ".next/server/app/static.json.body",
	"tanstack-start": ".output/public/static.json",
	"react-router": "build/client/static.json",
}["next"];

const content = fs.readFileSync(filePath);

const records = JSON.parse(content.toString()) as DocumentRecord[];

const client = algoliasearch(env.angoliaId, env.angoliaKey);

// update the index settings and sync search indexes
void sync(client, {
	indexName: "document",
	documents: records,
});
