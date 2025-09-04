import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header class="header">
      <img src="https://i.imgur.com/9HSdIl4.png" alt="Twikit Logo" class="logo" />
      <h1>Twikit</h1>
      <p class="subtitle">A Simple Twitter API Scraper</p>
    </header>

    <main class="main">
      <section class="hero">
        <div class="hero-content">
          <h2>Twitter API Without API Keys</h2>
          <p>Use functions such as posting or searching for tweets without an API key using this library.</p>
          
          <div class="features">
            <div class="feature">
              <div class="feature-icon">🔑</div>
              <h3>No API Key Required</h3>
              <p>This library uses scraping and does not require an API key.</p>
            </div>
            
            <div class="feature">
              <div class="feature-icon">💰</div>
              <h3>Free</h3>
              <p>This library is free to use.</p>
            </div>
            
            <div class="feature">
              <div class="feature-icon">🚀</div>
              <h3>Easy to Use</h3>
              <p>Simple and intuitive API for all Twitter operations.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="installation">
        <h2>Installation</h2>
        <div class="code-block">
          <code>pip install twikit</code>
          <button class="copy-btn" onclick="copyToClipboard('pip install twikit')">Copy</button>
        </div>
      </section>

      <section class="example">
        <h2>Quick Example</h2>
        <div class="code-block">
          <pre><code>import asyncio
from twikit import Client

USERNAME = 'example_user'
EMAIL = 'email@example.com'
PASSWORD = 'password0000'

# Initialize client
client = Client('en-US')

async def main():
    await client.login(
        auth_info_1=USERNAME,
        auth_info_2=EMAIL,
        password=PASSWORD
    )
    
    # Search tweets
    tweets = await client.search_tweet('python', 'Latest')
    for tweet in tweets:
        print(tweet.text)

asyncio.run(main())</code></pre>
          <button class="copy-btn" onclick="copyToClipboard(this.previousElementSibling.textContent)">Copy</button>
        </div>
      </section>

      <section class="functionality">
        <h2>Functionality</h2>
        <div class="functionality-grid">
          <div class="func-item">
            <h3>🐦 Create Tweets</h3>
            <p>Post tweets with text, media, and polls</p>
          </div>
          <div class="func-item">
            <h3>🔍 Search Tweets</h3>
            <p>Search for tweets by keywords, users, and more</p>
          </div>
          <div class="func-item">
            <h3>📈 Get Trends</h3>
            <p>Retrieve trending topics and hashtags</p>
          </div>
          <div class="func-item">
            <h3>👥 User Operations</h3>
            <p>Follow, unfollow, block, and mute users</p>
          </div>
          <div class="func-item">
            <h3>💬 Direct Messages</h3>
            <p>Send and receive direct messages</p>
          </div>
          <div class="func-item">
            <h3>📊 Analytics</h3>
            <p>Get tweet engagement metrics and statistics</p>
          </div>
        </div>
      </section>

      <section class="links">
        <h2>Resources</h2>
        <div class="links-grid">
          <a href="https://twikit.readthedocs.io/en/latest/twikit.html" class="link-card" target="_blank">
            <h3>📚 Documentation</h3>
            <p>Complete API reference and guides</p>
          </a>
          <a href="https://github.com/d60/twikit" class="link-card" target="_blank">
            <h3>💻 GitHub</h3>
            <p>Source code and examples</p>
          </a>
          <a href="https://discord.gg/nCrByrr8cX" class="link-card" target="_blank">
            <h3>💬 Discord</h3>
            <p>Community support and discussions</p>
          </a>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; 2024 Twikit. MIT License.</p>
      <div class="footer-links">
        <a href="https://github.com/d60/twikit/blob/main/LICENSE">License</a>
        <a href="https://github.com/d60/twikit/issues">Issues</a>
        <a href="https://www.buymeacoffee.com/d60py">Support</a>
      </div>
    </footer>
  </div>
`

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    // Show feedback
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = 'Copied!';
    btn.style.background = '#10b981';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
    }, 2000);
  });
}