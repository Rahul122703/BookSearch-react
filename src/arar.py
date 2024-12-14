import requests

# Define the search URL
search_url = "https://openlibrary.org/search.json?q=steve+jobs&fields=key,title,author_name,first_publish_year,cover_i"

try:
    # Make a GET request to the Open Library API
    response = requests.get(search_url)
    response.raise_for_status()  # Raise an HTTPError if the response code is 4xx or 5xx

    # Parse the JSON response
    data = response.json()
    print(len(data['docs']))
    # Check if the 'docs' key exists and contains data
    if 'docs' in data and data['docs']:
        # Print out the relevant details for each book
        for book in data['docs']:
            title = book.get('title', 'No title available')
            authors = ', '.join(book.get('author_name', ['No authors available']))
            publish_year = book.get('first_publish_year', 'Unknown publish year')
            cover_id = book.get('cover_i')

            # Construct the URL for the book cover image
            if cover_id:
                cover_url = f"https://covers.openlibrary.org/b/id/{cover_id}-L.jpg"
            else:
                cover_url = "No cover available"

            print(f"Title: {title}")
            print(f"Authors: {authors}")
            print(f"Publish Year: {publish_year}")
            print(f"Cover Image: {cover_url}\n")
    else:
        print("No books found in the response.")
except requests.exceptions.RequestException as e:
    print(f"An error occurred: {e}")
