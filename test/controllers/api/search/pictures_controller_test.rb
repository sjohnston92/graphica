require 'test_helper'

class Api::Search::PicturesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_search_pictures_index_url
    assert_response :success
  end

end
