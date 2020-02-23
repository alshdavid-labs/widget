import { stdom } from '~/kit/stdom'

export function setDebugValues(targets: Record<string, any>) {
  const window: any = stdom.getWindow()
  for (const key in targets) {
    window[key] = targets[key]
  }
}

setDebugValues({
  setConfig: () => {
    (window as any).sessionService.layoutCode = 'offer-layout-1';

    (window as any).themeService.configurables = {
      "Defaults.FontColor": "#262626",
      "Defaults.FontFamily": "'Open Sans','Helvetica Neue',Helvetica,Tahoma,Arial,FreeSans,sans-serif",
      "Defaults.Colors.Disabled": "#A9D18C",
      "Defaults.Colors.OnDisabled": "#FFF",
      "Defaults.Colors.Primary": "#1976d2",
      "Defaults.Colors.PrimaryActive": "#1976d2",
      "Defaults.Colors.OnPrimary": "#FFF",
      "Defaults.Colors.Secondary": "#FFF",
      "Defaults.Colors.SecondaryActive": "#FFF",
      "Defaults.Colors.OnSecondary": "#1976d2",
      "Defaults.Colors.Shade": "#727578",
      "Defaults.Colors.Error": "#E95350",
      "Options.Image.CreativeImageDisplay": "right",
      "Options.Creative.ResponseAlignment": "rightAligned",
      "Theme.Input.Padding": "0.5rem 0.85rem",
      "Theme.Input.BorderColor": "#727578",
      "Theme.Input.Focus.BackgroundColor": "#f7f7f7",
      "Theme.Input.Error.BackgroundColor": "#fddfdd",
      "Theme.Input.Error.BorderColor": "#fddfdd",
      "Theme.Divider.Display": "none",
      "Theme.Divider.Margin": "0",
      "Theme.Divider.BorderTopColor": "#727578",
      "Theme.Heading3.FontSize": "16px",
      "Theme.Button.Padding": "0.65rem 0.85rem",
      "Theme.Button.FontSize": "14px",
      "Theme.Button.Color": "white",
      "Theme.Button.FontWeight": "bold",
      "Theme.Link.TextDecoration": "underline",
      "Theme.Link.Color": "#727578",
      "Theme.Link.Hover.Color": "#0076d6",
      "Theme.Creative.Error.Copy.FontSize": "13px",
      "Theme.Creative.Error.Copy.Color": "#e95350",
      "Theme.Creative.Error.Copy.LineHeight": "1.3",
      "Theme.Creative.Heading.Title.FontSize": "1.1em",
      "Theme.Creative.Heading.Title.Color": "#262626",
      "Theme.Creative.Heading.Subtitle.FontSize": "0.9em",
      "Theme.Creative.Heading.Subtitle.Color": "#262626",
      "Theme.Creative.Heading.Subtitle.MarginBottom": "22px",
      "Theme.Creative.Price.Color": "#727272",
      "Theme.Creative.Price.FontSize": "1.0em",
      "Theme.Creative.Title.FontSize": "1.5em",
      "Theme.Creative.Title.LineHeight": "1.3",
      "Theme.Creative.Title.Margin": "0.6rem 0 0 0",
      "Theme.Creative.Title.Color": "#262626",
      "Theme.Creative.Copy.FontSize": "14px",
      "Theme.Creative.Copy.LineHeight": "1.3",
      "Theme.Creative.Response.Box.MarginBottom": "8px",
      "Theme.Creative.Response.Box.MarginRight": "8px",
      "Theme.Creative.Responses.Container.MarginBottom": "-8px",
      "Theme.Creative.Responses.Container.MarginRight": "-8px",
      "Theme.Creative.Section.Margin": "0",
      "Theme.Creative.Disclaimer.Section.FontSize": "0.7em",
      "Theme.Creative.Disclaimer.Section.Color": "#afafaf",
      "Theme.Placement.Header.Section.Color": "#ffffff",
      "Theme.Placement.Header.Section.BackgroundColor": "#d4120a",
      "Theme.Placement.Header.Section.Padding": "1rem 1.5rem",
      "Theme.LightboxCloseTrigger.Fill": "#ffffff",
      "Theme.LightboxCloseTrigger.Hover.Fill": "#dadada",
      "Theme.Placement.Footer.Section.FontSize": "0.7em",
      "Theme.Placement.Footer.Section.TextAlign": "right",
      "Theme.Placement.Footer.Section.Padding": "1rem 1.5rem",
      "Theme.Placement.Footer.Section.Color": "#afafaf",
      "Theme.Placement.Footer.Section.Margin": "16px 0 0 0",
      "Theme.Placement.Section.MaxWidth": "950px",
      "Theme.Placement.Section.Margin": "10px auto",
      "Theme.Placement.Section.Padding": "1rem 1.5rem",
      "Theme.PrimaryButton.BoxShadow": "0px 17px 10px -10px rgba(0,0,0,0.4)",
      "Copy.placement.heading.content": "### Your order is complete!",
      "Copy.placement.footer.roktPrivacyPolicy.content": "Privacy Policy",
      "Copy.placement.footer.roktPrivacyPolicy.link": "https://rokt.com/privacy-policy/",
      "Placement.CreativeRenderType": "Buttons",
      "Placement.Configuration.AllowEscToClose": "true",
      "Placement.Configuration.AllowClickOutsideToClose": "true",
      "Placement.Configuration.ToggleConfirmationMessage": "true",
      "FooterOptions.ShowFooter": "true",
      "FooterOptions.ShowClientPrivacyPolicy": "false",
      "FooterOptions.ShowPoweredByRokt": "true",
      "FooterOptions.ShowRoktPrivacyPolicy": "true",
      "Theme.Lightbox.Desktop.Margin": "50px auto",
      "Theme.Lightbox.Mobile.Margin": "40px",
      "Copy.placement.roktPrivacyPolicy.markdown.link": "https://roktcdn1.akamaized.net/placements/privacy-policy"
    };

    (window as any).copyService.copy = {
      'heading': 'Your order is complete!',
      'title': "Redeem your Groupon directly from your mobile device.",
      'subtitle': "Confirm your mobile number below to receive a text with a download link for the Groupon app.",
      'disclaimer': "Standard messaging rates apply",
      'image.src': "https://roktcdn1.akamaized.net/bbw/content/images/groupon/mobile.png",
      'success.title': "Success",
      'success.copy': "We've sent an SMS to your phone. Click the link to download the Groupon app."
    };
  }
})
