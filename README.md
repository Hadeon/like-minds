Simple idea is to create an app to network with people working on similar fields.

Going through a coding bootcamp it was always nice to work in a public space surrounded by like minded people, so considering I'm frequently going out and working in various places, I might as well create an app where I can post "working on web development at such and such place around this time." Idea is, you set up your fields of interest, and if you have notifications on, you'll receive an alert if someone posted an update in your area.

I.E. "Web Development" and someone goes to a coffee shop, posts they're currently there and will be for a couple hours, I'll get a notification and can click a +1 button to notify them that someone else is interested in coming.

Not that I'm expecting anything to come from this, but it's good practice and I like the idea of it.


-- Navbar with profile / notifications
  -- Profile dropdown renders login
    -- Once logged in renders Profile / Settings / Logout
-- Input for search by location, drops a different color of pin on this location and opens "When", "How Long" and "What" inputs as well as a Done button
-- Upon clicking "Done"
  -- Notify anyone with those topics listed in their profile within the range set

PROFILE:
  -- An interest section where you can add in as many keywords as you want, which are affiliated with notifications
  -- A distance dropdown for how far you are willing to receive notifications from

NOTIFICATIONS:  
  -- When a notification goes out, alert the user, add it in the dropdown and allow it to be selected which then opens a modal with the details of (Where, When, How Long, What and a +1 option)
  -- The +1 will send a notification to the poster that someone else is interested in joining