import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import React from "react";
import { docs } from "@/.source";
import { i18n } from "./i18n";

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
	// it assigns a URL to your pages
	baseUrl: "/docs",
	source: docs.toFumadocsSource(),
	i18n,
	icon(icon) {
		if (!icon) {
			// You may set a default icon
			return;
		}

		if (icon in icons)
			return React.createElement(icons[icon as keyof typeof icons]);
	},
});
