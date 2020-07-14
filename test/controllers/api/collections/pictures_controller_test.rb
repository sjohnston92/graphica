require 'test_helper'

class Api::Collections::PicturesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_collections_pictures_index_url
    assert_response :success
  end

end
