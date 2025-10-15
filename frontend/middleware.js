export async function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  
  // List of bot user agents
  const botPattern = /bot|googlebot|crawler|spider|robot|crawling|prerender|bingbot|yandex|baidu|duckduckbot|slurp|facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegram/i;
  
  if (botPattern.test(userAgent)) {
    const url = new URL(request.url);
    const prerenderUrl = `https://service.prerender.io${url.pathname}${url.search}`;
    
    try {
      const response = await fetch(prerenderUrl, {
        headers: {
          'X-Prerender-Token': 'J8gekf0hflXPdexJLBsn',
          'X-Prerender-Host': 'catiyochan.fun'
        }
      });
      
      return new Response(await response.text(), {
        status: response.status,
        headers: {
          'Content-Type': 'text/html',
        }
      });
    } catch (error) {
      // If prerender fails, serve normal page
      console.error('Prerender error:', error);
    }
  }
  
  // Return normal response for regular users
  return null;
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};