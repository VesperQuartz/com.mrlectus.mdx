"use client";
import { liteClient } from "algoliasearch/lite";
import { useDocsSearch } from "fumadocs-core/search/client";
import {
	SearchDialog,
	SearchDialogClose,
	SearchDialogContent,
	SearchDialogFooter,
	SearchDialogHeader,
	SearchDialogIcon,
	SearchDialogInput,
	SearchDialogList,
	SearchDialogOverlay,
	type SharedProps,
} from "fumadocs-ui/components/dialog/search";
import { useI18n } from "fumadocs-ui/contexts/i18n";
import { env } from "@/env/client";

const appId = env.angoliaId;
const apiKey = env.angoliaKey;
const client = liteClient(appId, apiKey);

export default function CustomSearchDialog(props: SharedProps) {
	const { locale } = useI18n(); // (optional) for i18n
	const { search, setSearch, query } = useDocsSearch({
		type: "algolia",
		client,
		indexName: "document",
		locale,
	});

	return (
		<SearchDialog
			search={search}
			onSearchChange={setSearch}
			isLoading={query.isLoading}
			{...props}
		>
			<SearchDialogOverlay />
			<SearchDialogContent>
				<SearchDialogHeader>
					<SearchDialogIcon />
					<SearchDialogInput />
					<SearchDialogClose />
				</SearchDialogHeader>
				<SearchDialogList items={query.data !== "empty" ? query.data : null} />
				<SearchDialogFooter>
					<a
						href="https://algolia.com"
						rel="noreferrer noopener"
						className="ms-auto text-xs text-fd-muted-foreground"
					>
						Search powered by Algolia
					</a>
				</SearchDialogFooter>
			</SearchDialogContent>
		</SearchDialog>
	);
}
