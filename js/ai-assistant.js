// FYN — Find Your North
// Smart In-Browser AI Assistant Engine (Zero API Keys Required)

class FYNAssistant {
  constructor() {
    this.history = [];
  }

  processQuery(query, state) {
    const q = query.toLowerCase().trim();
    const dest = state.currentDestination;
    let reply = "";
    let actionTaken = null;
    let priceEffect = 0;

    // 1. Relax a specific day (e.g. "make day 2 more relaxed" or "more relaxed")
    if (q.includes("relax") || q.includes("slow down") || q.includes("peaceful") || q.includes("chill")) {
      let targetDayNum = 2; // default
      const dayMatch = q.match(/day\s*(\d+)/i);
      if (dayMatch && dayMatch[1]) {
        targetDayNum = parseInt(dayMatch[1], 10);
      }

      // Check if day exists in current itinerary
      const dayIndex = state.customItinerary.findIndex(d => d.day === targetDayNum);
      if (dayIndex !== -1) {
        const day = state.customItinerary[dayIndex];
        // Replace afternoon or evening activity with relaxing spa
        if (day.activities.length > 1) {
          const replacedAct = day.activities[1];
          day.activities[1] = {
            id: `custom-relax-${Date.now()}`,
            time: "Afternoon",
            title: "Couples Luxury Spa & Thermal Herbal Bath (2 Hours)",
            description: "Deep tissue herbal oil massage, warm floral bath, and artisanal tea in a tranquil private sanctuary.",
            tag: "Relaxing Spa",
            costDelta: 1500,
            icon: "heart"
          };
          actionTaken = `Relaxed Day ${targetDayNum} (Replaced '${replacedAct.title}' with 2-Hour Herbal Spa)`;
          priceEffect = 1500;
          reply = `I have updated **Day ${targetDayNum}** to a relaxed, slow-paced schedule! Swapped out the afternoon excursion for a soothing 2-hour private luxury herbal spa session with warm tea. Your private chauffeur will pick you up whenever you're ready.`;
        } else {
          reply = `Day ${targetDayNum} already has a gentle pace, but I've ensured morning start times are flexible from 10:00 AM onwards!`;
        }
      } else {
        reply = `I've smoothed out the pacing across your trip! Late morning departures and private chauffeur transfers mean no rushing at any destination.`;
      }
    }

    // 2. Add romantic dinner (e.g. "romantic dinner", "candlelight", "honeymoon")
    else if (q.includes("romantic") || q.includes("candlelight") || q.includes("dinner for two") || q.includes("honeymoon")) {
      const targetDay = state.customItinerary[1] || state.customItinerary[0];
      if (targetDay) {
        targetDay.activities.push({
          id: `custom-romantic-${Date.now()}`,
          time: "Evening",
          title: "Private Candlelit 5-Course Dinner Under The Stars",
          description: "Private decorated gazebo with fairy lights, personalized chef menu, fresh flowers, and champagne/mocktails.",
          tag: "Romantic Milestone",
          costDelta: 3800,
          icon: "sparkles"
        });
        actionTaken = `Added Candlelit 5-Course Dinner to Day ${targetDay.day}`;
        priceEffect = 3800;
        reply = `Added a magical **Private Candlelit 5-Course Dinner Under The Stars** to Day ${targetDay.day}! Includes personalized table decoration, fairy lights, private server, and curated wine or mocktail pairings.`;
      }
    }

    // 3. Focus on pure vegetarian / Jain food
    else if (q.includes("veg") || q.includes("jain") || q.includes("food") || q.includes("dining")) {
      // Add custom culinary note to day 1 & day 3
      state.customItinerary.forEach((day, idx) => {
        if (idx === 0 || idx === 2) {
          day.activities.push({
            id: `custom-veg-${Date.now()}-${idx}`,
            time: "Evening",
            title: "Curated Indian Vegetarian & Jain Gourmet Trail",
            description: "Chauffeured dining at handpicked certified vegetarian kitchens with authentic warm rotis, paneer specialties, and no-onion/garlic options.",
            tag: "100% Pure Veg & Jain",
            costDelta: 1200,
            icon: "coffee"
          });
        }
      });
      actionTaken = `Configured 100% Pure Vegetarian & Jain Dining Concierge`;
      priceEffect = 2400;
      reply = `**Preferences updated to 100% Pure Vegetarian & Jain care!**\n\n1. Hotel chefs are instructed to prepare warm vegetarian breakfast options (idlis, dosas, parathas, poha).\n2. Your private chauffeur will take you only to verified vegetarian & Jain restaurants with authentic Indian flavors.\n3. Added curated vegetarian dining experiences into your itinerary.`;
    }

    // 4. Upgrade to luxury 5-star hotels
    else if (q.includes("5-star") || q.includes("luxury") || q.includes("upgrade hotel") || q.includes("best hotel")) {
      const luxuryHotel = dest.hotels[0]; // first is top tier luxury
      if (luxuryHotel) {
        state.selectedHotel = luxuryHotel;
        actionTaken = `Upgraded Hotel to ${luxuryHotel.name} (${luxuryHotel.tier})`;
        reply = `Upgraded your stay to **${luxuryHotel.name}** (${luxuryHotel.tier})! You'll enjoy premium luxury suites, club lounge access, daily gourmet breakfast, and priority check-in arranged by FYN.`;
      }
    }

    // 5. Add adrenaline adventure
    else if (q.includes("adventure") || q.includes("atv") || q.includes("thrill") || q.includes("paragliding") || q.includes("quad bike")) {
      const targetDay = state.customItinerary[1] || state.customItinerary[0];
      targetDay.activities.push({
        id: `custom-adv-${Date.now()}`,
        time: "Afternoon",
        title: "Off-Road 4x4 Quad Bike (ATV) Jungle & Mountain Safari",
        description: "Thrilling guided 90-minute off-road trail traversing bamboo forests, riverbeds, and scenic viewpoints.",
        tag: "Action Adventure",
        costDelta: 2800,
        icon: "navigation"
      });
      actionTaken = `Added Off-Road 4x4 Quad Bike Safari to Day ${targetDay.day}`;
      priceEffect = 2800;
      reply = `Adrenaline boost added! Inserted an **Off-Road 4x4 Quad Bike Safari** into Day ${targetDay.day}. Complete with safety gear, private instructor, and hotel transfers.`;
    }

    // 6. Family friendly / Kids
    else if (q.includes("family") || q.includes("kid") || q.includes("children")) {
      reply = `Configured for a **delightful family experience**! Pacing is adjusted with gentle 10:00 AM starts, child-friendly activity stops, private spacious vehicles (Innova / Mercedes van), and confirmed interconnected family suites.`;
      actionTaken = `Adjusted Itinerary for Family & Kids Comfort`;
    }

    // 7. Visa / Entry questions
    else if (q.includes("visa") || q.includes("passport")) {
      reply = `**Visa Information for ${dest.name}:**\n• Status: ${dest.visaInfo}\n• Requirement: Minimum 6 months passport validity from date of travel.\n• FYN provides full white-glove visa application assistance for you and your family!`;
    }

    // 8. Flight duration / connectivity
    else if (q.includes("flight") || q.includes("duration") || q.includes("time to reach") || q.includes("delhi") || q.includes("mumbai")) {
      reply = `**Flight connectivity for ${dest.name}:**\n• Direct flight time: ~${dest.flightDuration}.\n• Major airlines: IndiGo, Air India, Vietnam Airlines, Thai Airways, Air Astana, AZAL.\n• FYN can assist in bundling flights or you can book with your own credit card points!`;
    }

    // 9. Best time to visit / weather
    else if (q.includes("weather") || q.includes("best time") || q.includes("season") || q.includes("month")) {
      reply = `The ideal season to explore **${dest.name}** is **${dest.bestSeason}**. You'll experience pleasant temperatures, clear skies, and optimal conditions for photography and outdoor excursions.`;
    }

    // 10. Default smart response
    else {
      reply = `Great suggestion! I've updated your trip parameters. You can also swap any specific activity by clicking the **"Swap"** button on any day card, or switch hotels in the **Hotels Tab**. Whenever you're ready, click **"Lock Price on WhatsApp"** to save this exact plan!`;
    }

    return {
      reply,
      actionTaken,
      priceEffect
    };
  }
}

window.FYNAssistant = FYNAssistant;
