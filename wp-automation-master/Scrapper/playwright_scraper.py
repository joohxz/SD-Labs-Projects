# playwright_scraper.py
import json
import asyncio
import time

from playwright.sync_api import sync_playwright
from playwright.async_api import async_playwright
import pandas as pd
import os
import sys


async def scrape_url_async(url):

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto(url)
        print(await page.title())
        # content = await page.content()
        # # print(content)

        # Extract elements text content and attributes
        h1_text = await (await page.query_selector("h1")).text_content() if await page.query_selector("h1") else ""
        p_text = await (await page.query_selector("p")).text_content() if await page.query_selector("p") else ""
        a_href = await (await page.query_selector("a")).get_attribute("href") if await page.query_selector("a") else ""
        img_src = await (await page.query_selector("img")).get_attribute("src") if await page.query_selector("img") else ""
        language = await page.evaluate("() => document.documentElement.lang")

        print(f"h1: {h1_text}")
        print(f"language: {language}")
        print(f"p: {p_text}")
        print(f"a: {a_href}")
        print(f"img: {img_src}")
        print(f"lang: {language}")
        print(f"url: {url}")

        data = {
            "H1": h1_text,
            "P": p_text,
            "A": a_href,
            "IMG": img_src,
            "Language": language,
            "URL": url
        }
        print(f"data: {data}")

        # Define the path for content.json within the Scrapper folder
        current_dir = os.path.dirname(__file__)  # Gets the directory where the script is located
        json_file_path = os.path.join(current_dir, 'content.json')  # Constructs the path to content.json


        # if os.path.exists(json_file_path):
        #     os.remove(json_file_path)


        # Save data to JSON file
        with open(json_file_path, 'w') as json_file:
            json.dump(data, json_file)

        await browser.close()
        return data


async def scrape_all_elements(url):
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto(url)
        print(await page.title())

        current_dir = os.path.dirname(__file__)  # Gets the directory where the script is located
        json_all_data_path = os.path.join(current_dir, 'all_data_content.json')  # Constructs the path to content.json
        print(f"json_all_data_path : \n {json_all_data_path}")

        elements = await page.query_selector_all("*")
        all_elements_data = []

        for element in elements:
            # Getting the tag name for conditional attribute fetching
            tag_name = await element.evaluate("element => element.tagName")

            # Dynamically fetching attributes based on the tag type
            attributes_to_fetch = ["class", "title", "alt", "rel", "href", "src"]
            element_data = {"tag_name": tag_name.lower()}  # Always include tag name

            for attr in attributes_to_fetch:
                attribute_value = await element.get_attribute(attr)
                if attribute_value:  # Only add attribute if it exists
                    element_data[attr] = attribute_value

            # Including text content for certain tags if needed
            if tag_name.lower() in ["p", "a", "h1", "h2", "h3", "li"]:
                text_content = await element.text_content()
                element_data["text_content"] = text_content.strip()

            all_elements_data.append(element_data)

        all_data = {"elements": all_elements_data}

        # Optionally, add URL and detected page language to the JSON
        language = await page.evaluate("() => document.documentElement.lang")
        all_data.update({
            "Language": language,
            "URL": url
        })

        # Save data to JSON file
        with open(json_all_data_path, 'w') as json_file:
            json.dump(all_data, json_file, indent=4)

        await browser.close()
        return all_data


def json_to_dataframe():
    # Define the path for content.json within the Scrapper folder
    current_dir = os.path.dirname(__file__)  # Gets the directory where the script is located
    json_file_path = os.path.join(current_dir, 'content.json')  # Constructs the path to content.json

    with open(json_file_path, 'r') as json_file:
        data = json.load(json_file)

    df = pd.DataFrame([data])  # Convert the dictionary to a DataFrame
    return df


if __name__ == "__main__":
    url = sys.argv[1]
    # url = 'https://www.garagegymreviews.com/4-gauge-pre-workout-review'
# #     url = 'https://www.newyork.nl/erics-new-york-transfer-planner/'
#     # url = 'https://palworldguide.org/palworld-breeding-calculator/'
# #     url = 'https://www.newyork.nl/sporten/schaatsen-in-new-york/'
# #
# #     # scrape_url(url)
# #
    asyncio.run(scrape_url_async(url))
    time.sleep(.2)
    asyncio.run(scrape_all_elements(url))
# #     df = json_to_dataframe()
# #     print(df)
