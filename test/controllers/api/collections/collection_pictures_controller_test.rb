require 'test_helper'

class Api::Collections::CollectionPicturesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_collections_collection_pictures_index_url
    assert_response :success
  end

end
