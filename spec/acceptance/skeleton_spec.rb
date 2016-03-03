require 'spec_helper'
require 'webrick'

RSpec.feature 'Signed out users', type: :feature do
  scenario 'Visiting the root page' do
    visit "/"

    expect(page.text).to eq("Sign In")
  end
end
